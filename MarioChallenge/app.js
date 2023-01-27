function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
        // aRect.bottom + aRect.height < bRect.bottom ||
        // aRect.bottom > bRect.bottom + bRect.height ||
        // aRect.right + aRect.width < bRect.right ||
        // aRect.right > bRect.right + bRect.width
	);
}

const init = () => {
    //get the avatar
    // const avatar = document.querySelector(".avatar")
    //get the coin

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        
        }else if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        
        }else if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveVertical(avatar, -50);
        
        }else if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveVertical(avatar, 50);      
        }

        if(isTouching(avatar,coin)) moveCoin();
    });
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;

    

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2
        ))
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth)
    // const y = ?
    const y = Math.floor(Math.random() * window.innerWidth)
    coin.style.top = `${x}px`;
    // coin.style.?? = ??
    coin.style.top = `${y}px`;
}

init();
