'use client';

import { useEffect, useState } from 'react'

function Digit(props: {number: number, isDecimalSeperator?: Boolean, incorrect?: Boolean}) {
    const filled = props.number > 0;
    if (props.isDecimalSeperator) {
        return <div className="p-3 bg-gray-600 rounded-lg text-gray-300 text-2xl mr-px">.</div>
    }
    if (filled) {
        if(props.incorrect){
            return <div className="p-3 bg-red-400 rounded-lg text-gray-300 text-2xl mr-px">{props.number}</div>
        } else {
            return <div className="p-3 bg-gray-600 rounded-lg text-gray-300 text-2xl mr-px">{props.number}</div>
        }
    } else {
        return <div className="p-3 border-gray-600 border-solid border-2 rounded-lg text-white text-2xl mr-px">0</div>
    }
}

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1)
}

const userDigits: number[] = [];
let lost: Boolean = false;
let lostOn: number;

// Pi up to 1500 digits (without 3.14 because that is already there)
const pi = "1592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955"
const allowedInputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
function handleKey(event: any, index: number = 0) {
    if (lost || (!event.isComposing && !allowedInputs.includes(event.key))) {
        return event.preventDefault();
    }
    if (event.key !== pi[index]) {
        lostOn = event.key as number;
        lost = true;
        return;
    }
    userDigits.push(event.key as number)
}

export default function Test() {
    const forceUpdate = useForceUpdate();
    let count = 0;
    let index = 0

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (allowedInputs.includes(event.key)){
                handleKey(event, index);
                index++;
                forceUpdate();
                count++;
            }
        });

        return () => {
          document.removeEventListener("keydown", handleKey);
        };
      }, []);

    return (
        <div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-24 flex flex-col">
                <span className="text-4xl mb-0">{userDigits.length} digits</span>
                <small className="text-xs mt-0 text-gray-600">Without 3.14</small>
            </div>
            <div className="absolute top-1/2 right-1/2 -translate-y-1/2 -translate-x-5 flex flex-row">
                <Digit number={3}/>
                <Digit number={0} isDecimalSeperator={true}/>
                <Digit number={1}/>
                <Digit number={4}/>
                {
                    userDigits.map(function (value, index, array) {
                        return <Digit key={index} number={value} />
                    })
                }
                {!lost ? (<Digit number={-1} />) : (<Digit number={lostOn} incorrect={true}/>)}

            </div>
            <span id="indicator" className="text-gray-600 absolute top-1/2 left-1/2 -translate-x-10 translate-y-8">^ type to place digit here</span>
        </div>
    );
}