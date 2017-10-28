function encode() {
  console.log(arguments);
}
function serializeForm(form, encoding, trigger, event) {
  var formValues=null;
  var x=0, y=0;
  if(trigger && trigger.type=='image' && trigger.name){
    if(window.event){
      x=window.event.offsetX;
      y=window.event.offsetY;
    }else if(event.target){
      var coords={x:0,y:0};
      var elmt =trigger;
      while(elmt){
        coords.x+=elmt.offsetLeft;
        coords.y+=elmt.offsetTop;
        elmt=elmt.offsetParent;
      }
      x=event.clientX+window.scrollX-coords.x-1;
      y=event.clientY+window.scrollY-coords.y-1;
    }
  }

  for( var i=0;i<form.elements.length;i++){
    var currentField=form.elements[i];
    var fieldName=currentField.name;
    var fieldType=currentField.type;
    if((!currentField.disabled)&&fieldName){
      switch (fieldType){
        case "text":
        case "password":
        case "hidden":
        case "textarea":
            formValues = encode(formValues, fieldName, currentField.value, encoding);
            break;
        case "radio":
        case "checkbox":
            if(currentField.checked){
              formValues=encode(formValues,fieldName,currentField.value,encoding);
            }
            break;
        case "select-one":
        case "select-multiple":
            for( var j=0;j<currentField.options.length;j++){
              if(currentField.options[j].selected){
                formValues=encode(formValues,fieldName,(currentField.options[j].value!=null)?currentField.options[j].value:currentField.options[j].text,encoding);
              }
            }
            break;
        case "file":
            if(currentField.value){
              return "fileupload";
            }else{
              formValues=encode(formValues,fieldName,currentField.value,encoding);
            }
            break;
        case "submit":
            if(currentField==trigger){
              formValues=encode(formValues,fieldName,currentField.value,encoding);
            }
            break;
        default :continue;
      }
    }
  }

  if(trigger && trigger.type=='image'&&trigger.name){
    formValues=encode(formValues,trigger.name+".x",x,encoding);
    formValues=encode(formValues,trigger.name+".y",y,encoding);
    formValues = encode(formValues, trigger.name, trigger.value, encoding);
  }
  return formValues;
}


