window.addEventListener('DOMContentLoaded', function() { //abre el formulario
    var link = document.querySelector('#btnPlus');
    link.addEventListener('click',function() {      
        url = "add.html";
        parent.window.open(url, "MyParentWindowPopUp", "width=300, height=605");

    });
});


window.onload=function traerDatos() {//llena el select
    let datos = JSON.parse(localStorage.getItem("sitios"));
    let res = document.querySelector('#siteS');
    res.innerHTML = '';

    for(let item of datos){
        res.innerHTML +=`
            <option>${item.sitio}</option>
        `
    }
}

window.onchange=function llenarTextBox() { //llena los textbox al presionar el select
    let datos = JSON.parse(localStorage.getItem("sitios"));

    var dropdown = document.getElementById("siteS");
    var params = dropdown.value;
    
    const result = datos.filter(obj => obj.sitio == params);
    var userResult = result[0].usuario;
    var passResult = result[0].contraseña;

    let res = document.querySelector('#userS');
    res.innerHTML = '';
    res.innerHTML +=`
    <input type="text" class="form-control" value="${userResult}">
    `
    let res2 = document.querySelector('#passwordS');
    res2.innerHTML = '';
    res2.innerHTML +=`
    <input type="text" class="form-control" value="${passResult}">
    `
}



window.addEventListener('DOMContentLoaded', function() { //abre el formulario
        var down = document.querySelector('#btnDown');
        down.addEventListener('click',function() {     

        let data = JSON.parse(localStorage.getItem("sitios"));
        let fileContents = JSON.stringify(data, null, 2); 
        var fileName = "MyPass.json";
        var pp = document.createElement('a');
        pp.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(fileContents));
        pp.setAttribute('download', fileName);
        pp.click(); 
    });
});

 