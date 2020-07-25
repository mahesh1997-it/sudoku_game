function time()
{
    var a=59;
    var b=4;
    
      setInterval(countdown, 1000);
    function countdown() {
        if (a > 0&&b>=0) {
            document.getElementById('four').innerHTML = b+":"+a ;
            a--;
            if(a===0){
            b--;
            a=59;
                     }
            
          } else {
            document.getElementById('four').innerHTML = "You Lost" ;
         }

        }} 



        function got(){

        var aa=document.querySelectorAll("input");
        console.log(aa)
        if(aa[0].value==4&&aa[1].value==7&&aa[2].value==2&&aa[3].value==1&&aa[4].value==6&&aa[5].value==8&&aa[6].value==3
          &&aa[7].value==4&&aa[8].value==2&&aa[9].value==9&&aa[10].value==1&&aa[11].value==2&&aa[12].value==3&&aa[13].value==4
         && aa[14].value==8&&aa[15].value==5&&aa[16].value==7&&aa[17].value==5&&aa[18].value==9&&aa[19].value==2&&aa[20].value==6
           &&aa[21].value==1&&aa[22].value==3&&aa[23].value==7&&aa[24].value==1&&aa[25].value==5&&aa[26].value==9&&aa[27].value==4
           &&aa[28].value==4&&aa[29].value==2&&aa[30].value==7&&aa[31].value==9&&aa[32].value==8&&aa[33].value==5&&aa[34].value==9
           && aa[35].value==1&&aa[36].value==2&&aa[37].value==8&&aa[38].value==7&&aa[39].value==3&&aa[40].value==4&&aa[41].value==5
           &&aa[42].value==5&&aa[43].value==3&&aa[44].value==7&&aa[45].value==2&&aa[46].value==6&&aa[47].value==4&&aa[48].value==6
           &&aa[49].value==3&&aa[50].value==1){


            document.getElementById('four').remove();
            document.getElementById('five').innerHTML="You Won";
           }

           else{
            document.getElementById('four').remove();
                
            document.getElementById('five').innerHTML="You Lost";
            }

          function reset(){

            document.querySelectorAll("input").reset();
            document.getElementById('four').reset();
          }



        }
     

