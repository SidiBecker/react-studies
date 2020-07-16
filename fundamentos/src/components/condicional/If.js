export default props => {

    //Getting component Else 
    const elseChild = props.children.find(child =>
        child.type && child.type.name === 'Else'
    );

    //Getting all but Else
    const ifChildren = props.children.filter(child =>
        child !== elseChild
    );

    if (props.value) {
        return ifChildren

    } else if (elseChild) {

        return elseChild;
    }

    return false;
}

export const Else = props => props.children