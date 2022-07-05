import { useEffect, useState } from "react";
import { Autofill } from "./inputFields.jsx";

const exampleInterestList = ["Programming", "Design", 'UI/UX'];
const exampleSelectedInterest = ["Programming"];

const Interest = () => {

    const [allInterest, setAllInterest] = useState([]);
    const [interestList, setInterestList] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [interestMap, setInterestMap] = useState({});

    useEffect(() => {
        // logic to fetch all intersts and selected interest
        setAllInterest(exampleInterestList);
        setSelectedInterests(exampleSelectedInterest);
        let tempMap = {};
        exampleSelectedInterest.forEach((intrst, idx) => {
            tempMap[idx] = intrst;
        });
        setInterestMap(tempMap);
    }, [])

    useEffect(() => {
        setInterestList(allInterest.filter(i => !selectedInterests.includes(i)))
    }, [selectedInterests])

    const deleteOne = (idx) => {
        if(idx === 0) return;
        let temp = [];
        let tempMap = {};
        selectedInterests.forEach((i, indx) => {
            if(indx !== idx) {
                temp.push(i);
                tempMap[indx] = i;
            } 
        })
        console.log(temp);
        setSelectedInterests(temp);
        setInterestMap(tempMap);
    }

    useEffect(() => {
        console.log(interestMap);
    }, [interestMap])

    const addMoreField = () => {
        let lastIndex = Object.keys(interestMap).length - 1;
        if(interestMap[lastIndex]){
            setInterestMap(prev => ({...prev, [lastIndex + 1]: ""}));
            setSelectedInterests(prev => [...prev, ""]);
        }
    }

    return (
        <div className="container py-4 d-flex flex-column h-100 justify-content-around">
            <div>
                <h2 className="fw-600">Interest</h2>
            </div>
            <div>
                <div className="d-flex flex-wrap rg-1 px-0">
                    {
                        selectedInterests.map((s, i) => (
                            <div key={i} className="col-12 py-2 col-md-6 col-lg-4">
                                <Autofill label="Interest Name" value={interestMap[i]} name={'interest' + i}
                                    onChange={(e) => { setInterestMap(prev => ({...prev, [i]: e.target.value})) }} list={interestList}
                                />
                                <div className="d-flex justify-content-end pt-2 cg-1">
                                    <button className="btn btn-sm edit-btn">Edit</button>
                                    <button className="btn btn-sm delete-btn" onClick={() => { deleteOne(i) }}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="d-flex">
                <button className="btn m-auto px-4 edit-btn"
                    onClick={addMoreField}
                >Add more</button>
            </div>
        </div>
    );
};
export default Interest;
