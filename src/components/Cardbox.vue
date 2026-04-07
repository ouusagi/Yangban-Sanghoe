<template>
    <div class="card-box">
        <div class="card-img">
            <img :src="transfer.photo" alt="bugak-image">
        </div>

        <div class="card-info">
            <span class="card-badge">BEST</span>
            <h3>{{ transfer.name }}</h3>
            <p>{{ transfer.price.toLocaleString() }}원</p>
            <p class="card-rating">★★★★★</p>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        transfer:Object,
    }
    
}
</script>


<style>
    .card-box {
        width: 200px;
        border-radius: 8px;
        overflow: hidden;
        background-color: white;
        border: 1px solid #E8E0D0;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .card-box:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }

    .card-img {
        width: 100%;
        height: 180px;
        overflow: hidden;
    }

    .card-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
    }

    .card-box:hover .card-img img {
        transform: scale(1.05);
    }

    .card-info {
        text-align: left;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .card-badge {
        display: inline-block;
        background-color: #8B6B4A;
        color: white;
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
        width: fit-content;
    }

    .card-info h3 {
        font-size: 0.95rem;
        font-weight: 500;
        color: #3D2B1F;
        font-family: "Noto Serif KR", serif;
    }

    .card-info p {
        font-size: 0.9rem;
        color: #8B6B4A;
    }

    .card-rating {
        font-size: 0.8rem;
        color: #C4BAA8;
    }

</style>