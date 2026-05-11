FROM golang:1.26.1
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o main ./cmd/main.go
CMD [ "./main" ]