function Digit(props: {number: number, isDecimalSeperator?: Boolean}) {
    const filled = props.number > 0;
    if (props.isDecimalSeperator) {
        return <div className="p-3 bg-gray-600 rounded-lg text-gray-300 text-2xl mr-px">.</div>
    }
    if (filled) {
        return <div className="p-3 bg-gray-600 rounded-lg text-gray-300 text-2xl mr-px">{props.number}</div>
    } else {
        return <div className="p-3 border-gray-600 border-solid border-2 rounded-lg text-gray-300 text-2xl mr-px">&nbsp;</div>
    }
}

export default function Test() {
    return (
        <div>
            <div className="absolute top-1/2 right-1/2 -translate-y-1/2 -translate-x-5 flex flex-row">
                <Digit number={3}/>
                <Digit number={0} isDecimalSeperator={true}/>
                <Digit number={1}/>
                <Digit number={4}/>
                <Digit number={-1}/>
            </div>
            <span id="indicator" className="text-gray-600 absolute top-1/2 left-1/2 -translate-x-10 translate-y-8">^ type to place digit here</span>
        </div>
    );
}