let countel=document.getElementById("count-el")
let saveel=document.getElementById("save-el")
let count=0

function increment()
{
    count+=1
    countel.textContent=count
}
function save()
{
saveel.textContent+=count+" - "
 countel.textContent=0
 count=0
}