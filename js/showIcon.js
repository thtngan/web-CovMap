function showMe(icon,name){
    var chboxs = document.getElementById(name)
    var vis = "none";
        if(chboxs.checked){
            vis = "block";
        }
    document.getElementById(icon).style.display = vis;
}