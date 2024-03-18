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