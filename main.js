Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("webcam");
Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML="<img id='capture_img' src='"+data_uri+"' >";
        
    })
}
console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7cqujVmzS/model.json",modelloaded);
function modelloaded(){
    console.log("model has been loaded")
}
function check(){
    img=document.getElementById("capture_img");
    classifier.classify(img,gotresult);

}
function gotresult(error,results){
    if(error){
    console.error(error);

    }else{
    console.log(results);
    document.getElementById("objectname").innerHTML=results[0].label;
    document.getElementById("accuracyname").innerHTML=results[0].confidence.toFixed(3);
    }
}