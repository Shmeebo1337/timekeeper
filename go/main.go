package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func setupCorsResponse(w *http.ResponseWriter, r *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-length, Authorization")
}

func postTime(w http.ResponseWriter, r *http.Request) {
	setupCorsResponse(&w, r)
	newTime, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(newTime)
}

func main() {
	http.HandleFunc("/", postTime)
	fmt.Println("Server started.")
	http.ListenAndServe(":8080", nil)
}
