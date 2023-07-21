// Table properties
const theadRow = document.getElementById("table-heading-row");
const tbodyRow = document.getElementById("table-body");

// constants
const columns = 26;
const rows = 100;

let cutValue = {};

//style buttons
const boldButton = document.getElementById('bold-btn');
const italicsButton = document.getElementById('italics-btn');
const underlineButton = document.getElementById('underline-btn');

// Bold-fontWeight,normal
boldButton.addEventListener("click",()=>{
   if(currentCell.style.fontWeight === "bold"){
    currentCell.style.fontWeight = "normal";
   }
   else currentCell.style.fontWeight = "bold";
});

// Italics-fontStyle,normal
italicsButton.addEventListener('click',()=>{
  if(currentCell.style.fontStyle === 'italic'){
    currentCell.style.fontStyle = 'normal';
  }
  else currentCell.style.fontStyle = 'italic';
})

// underline - textDecoration,null
underlineButton.addEventListener('click',()=>{
  if(currentCell.style.textDecoration === 'underline'){
    currentCell.style.textDecoration = null;
  }
  else currentCell.style.textDecoration = 'underline';
});

// align buttons
const leftAlign = document.getElementById('left-align');
const centerAlign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');


//leftAlign Button
leftAlign.addEventListener('click',()=>{
  currentCell.style.textAlign = 'left';
})
//centerAlign Button
centerAlign.addEventListener('click',()=>{
  currentCell.style.textAlign = 'center';
})
// rightAlign Button
rightAlign.addEventListener('click',()=>{
  currentCell.style.textAlign = 'right';
})

//Font-Size
const fontSizeDropdown = document.getElementById("font-size");
fontSizeDropdown.addEventListener("change", () => {
  currentCell.style.fontSize = fontSizeDropdown.value;
});


//Font-Family
const fontFamilyDropdown = document.getElementById("font-family");
fontFamilyDropdown.addEventListener("change", () => {
  currentCell.style.fontFamily = fontFamilyDropdown.value;
});

// color_text
const colorText = document.getElementById("color_text");
colorText.addEventListener("input", () => {
  currentCell.style.color = colorText.value;
});

// color_fill
const colorFill = document.getElementById("color_fill");
colorFill.addEventListener("input", () => {
  currentCell.style.backgroundColor = colorFill.value;
});

//copy-btn
const copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", () => {
  cutValue = {
    style: currCell.style.cssText,
    text: currCell.innerText,
  };
  // updateJson(currentCell);
});

// cut-btn
const cutBtn = document.getElementById("cut-btn");
cutBtn.addEventListener("click", () => {
  cutValue = {
    style: currentCell.style.cssText,
    text: currentCell.innerText,
  };
  // currentCell.style = '';
  // currentCell.innerText = '';
  currentCell.style = null;
  currentCell.innerText = null;
});


//paste-btn
const pasteBtn = document.getElementById("paste-btn");
pasteBtn.addEventListener("click", () => {
  if(cutValue.text || cutValue.style){
    currentCell.style.cssText = cutValue.style;
  currentCell.innerText = cutValue.text;
  }
  
});

// looping from A to Z
for (let col = 0; col < columns; col++) {
    let th = document.createElement("th");
    th.innerText = String.fromCharCode(col+65);
    theadRow.append(th);
  }
  
  //A B C D -->26 times
  //100*26

  // for adding heading in excel sheet;
  for(let row=1;row<=rows;row++){
      let tr = document.createElement("tr");
      // table heading
      let th = document.createElement("th");
       // I made innerText = row number
      th.innerText = row;
      tr.appendChild(th); //It means put th inside tr

    //  for (let col = 65; col <= 90; col++) { //In place of below col we can write this even work same  
    //loop from A to Z 
    for (let col = 0; col < columns; col++) {
        let td = document.createElement("td");
        td.setAttribute("contenteditable","true");
        tr.append(td); //It means put td inside tr
         td.setAttribute('id',`${String.fromCharCode(col+65)}${row}`)
        //  td.addEventListener('focus',(event)=> onfocus(event));
         td.addEventListener('focus',(event)=> onFocusFn(event));
         tr.append(td);
      }
      tbodyRow.appendChild(tr);
}
let currentCell;
function onFocusFn(event){
  // console.log(event.target.id);
  currentCell = event.target;
  document.getElementById('currentCell').innerText = currentCell.id;
}
