<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="modal-overlay"
        @click.self="close"
      >
        <div class="modal">
          <div class="modal-header">
            <slot name="header">
              <h2>전화 & 문자 문의하기</h2>
            </slot>

            <button class="close-btn" @click="close">
              ✕
            </button>
          </div>

          <div class="modal-body">
            <h4>070-4792-5789</h4>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button @click="close">닫기</button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(["update:modelValue"])

const close = () => {
  emit("update:modelValue", false)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  width: 420px;
  max-width: 90%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 20px;
  border-bottom: 1px solid #eee;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 16px 20px;
  border-top: 1px solid #eee;
  text-align: right;
}

.close-btn {
  border: none;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
}

.modal-enter-active,
.modal-leave-active {
  transition: .25s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: translateY(-20px);
}

.modal-footer button{
    padding: 0.2rem 0.5rem;
}
</style>