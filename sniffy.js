window.alert("Sniffy is Loaded!")
console.log("Hi Iam Sniffy. Use sniffy(<command>) to let me know what i can help you with.");
document.getElementsByTagName("BODY").SetAttribute("id","Docm");
sniff_count=0;
var elem_name=null;
var sniffy = function(cmd=null){
    console.log("sniff",sniff_count);
    if(cmd==null){
        cmd=null;
        console.log("Hello, What can i do for you?");
        cmd=window.prompt("Command your sniffy!");
        sniffy(cmd);
    }
    
    else{
        if(cmd=='PING'){
            console.log("PONG");
        }
        else if (cmd=="init"){
            boot_sniffy();
        }
        else if(cmd=="SCAN_DOM"){
            console.log("DOM Scan started");
            if(elem_name==null){
            elem_name=window.prompt("Enter element name:");
            }
            if(elem_name!=""){
                console.log("Scanning DOM for "+elem_name);
                try{
                var elem_name_list= document.querySelectorAll(elem_name);
                }
                catch(e){
                    console.log("Fatal:"+e);
                }
                console.log("DOM Scan Complete");
                console.log(elem_name_list);
            }
            else{
                console.log("Entered Element is Invalid please enter a html TagName");
                console.log("DOM Scan Failed");
                sniffy("SCAN_DOM");

            }
        }
        else if(cmd=="delete-content"){
            document.getElementById("Docm").innerHTML = "deleted";
        }
        else {
            console.log("Sorry I don't Understand the Command. Please Try again");

        }
    }
    
    sniff_count++;
    
    
}
var boot_sniffy = function(){
    clear();
    console.log("Booting up Sniffy!");
    elem_name="body";
    sniffy("SCAN_DOM");
}