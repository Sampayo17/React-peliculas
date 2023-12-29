export default function Button(props: buttonProps){
    return (
        <button disabled={props.disable} type={props.type}className="btn btn-primary"
        onClick={props.onClick}
        >{props.children}</button>
    )
}

interface buttonProps{
    children: React.ReactNode,
    onClick?(): void;
    type: "button"  | "submit"
    disable: boolean
}

Button.defaulProps = {
    type: "button",
    disable: false
}