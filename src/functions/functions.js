//display notification function set time to 3 secs
export function dispalyNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 3000);
}

//check win function
export function checkWin(correct, wrong, word){
    let status = 'win';

    //check if player won
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            //haven't won or lost
            status = '';
        }
    });
    //player loses
    if(wrong.length === 6) status = 'lose';

    return status
}