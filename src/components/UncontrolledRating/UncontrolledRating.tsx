import React, {useState} from "react";

type RatingPropsType = {

}

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering")

    const [value, setValue] = useState<ValueType>(0)

    /*const changeValue = (value: ValueType) => {
        setValue(value)
    }*/

    return (
        <div>
            <Star selected={value > 0} setValue={()=> setValue(1)}/>
            <Star selected={value > 1} setValue={()=> setValue(2)}/>
            <Star selected={value > 2} setValue={()=> setValue(3)}/>
            <Star selected={value > 3} setValue={()=> setValue(4)}/>
            <Star selected={value > 4} setValue={()=> setValue(5)}/>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return (
        <span onClick={() => props.setValue()}>
            { props.selected ? <b>star </b> : 'star ' }
        </span>
    )
    /*return props.selected ? <span><b>star</b> </span> : <span>star </span>*/

    /*if (props.selected) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }*/
}