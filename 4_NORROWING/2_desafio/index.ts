const review = (review: number | boolean) => {
    if(typeof review === "boolean") {
        console.log("O usuario não deixa review")
        return
    }

    console.log(`O usuário deixa a review de ${review}`)
}

review(2)
review(false)