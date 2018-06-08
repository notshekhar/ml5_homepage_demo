
let img = document.querySelector('#image')
let span = document.querySelector('#predicted')
let upload = document.querySelector('#get_file')
let file = document.querySelector('#file')
let nn = new ml5.ImageClassifier('SqueezeNet')
let drag = document.querySelector('#drag')
img.onload = function(){
  nn.predict(img, 1, function(results){
    span.innerHTML ='Image may contain <span id="class">'+ results[0].className + "</span>, I'm <span id='sure'>"+results[0].probability*100 +'%</span> sure.'
  })
}
upload.onclick = function(){
  file.click()
}
file.onchange = function(e){
  // if(file.files[0].type == "image/png"){
    let url = window.URL.createObjectURL(file.files[0])
    console.log(file.files[0].type)
    img.src=url
  // }else{
  //   console.log("file type is not image you uploaded")
  // }
}
