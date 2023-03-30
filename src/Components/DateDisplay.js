export default function DateDisplay( props ){
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        <span className="date-display">
            {props.date.toLocaleString('en-US', options)}
        </span>
    );
}
