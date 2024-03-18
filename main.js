const handleActiveAmount = () => {
    const thisNode = event.target;
    const ul = thisNode.parentNode.parentNode

    /* Remove active class */
    const activeNode = ul.getElementsByClassName('active')[ 0 ]
    activeNode.classList.value = 'taka flex-center'

    /* Add active class to this node */
    const toBeActiveAnchorClasses = thisNode.classList
    toBeActiveAnchorClasses.value += ' active';
}

const validate = () => {
    console.log(event.target.value);
    const amount = event.target;

    if (amount.value < 0) {
        amount.value = 0;
        return alert('Please give a valid amount.')
    }
}