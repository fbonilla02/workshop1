const PostData = async (object = {}) => {

    try {
        let res = await fetch("https://workshop-12.herokuapp.com/productos/", {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                "Content-type": "application/json; charset=utf-8"
            }
        })

        let data = await res.json();
        alert("Información creada")
        
    } catch (error) {
        alert("Hubo un error", error)
    }


}

export default PostData;