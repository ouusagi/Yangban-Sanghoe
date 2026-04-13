package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Product struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Price    int    `json:"price"`
	Photo    string `json:"photo"`
	Info     string `json:"info"`
	Category string `json:"category"`
}

func main() {
	godotenv.Load()
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASS"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("DB 연결 실패")
	}

	r := gin.Default()

	// ProductList용
	r.GET("/api/products", func(ctx *gin.Context) {
		var products []Product
		db.Find(&products)
		ctx.JSON(200, gin.H{
			"products": products,
		})
	})

	// ProductDetail용
	r.GET("/api/products/:id", func(ctx *gin.Context) {
		id := ctx.Param("id")
		var products Product
		db.First(&products, id)
		ctx.JSON(200, gin.H{
			"products": products,
		})
	})

	r.Run(":8080")
}
