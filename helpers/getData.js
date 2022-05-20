const getData = async (url = "https://workshop-12.herokuapp.com/productos/") => {

    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        alert("Hubo un error")
    }

}


export default getData;