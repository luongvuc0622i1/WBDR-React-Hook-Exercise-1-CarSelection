import { useState } from "react";

function Car() {
    let [selectedCar, setSelectedCar] = useState(0);
    let [selectedColor, setSelectedColor] = useState("0");

    const choiceCar = e => {
        setSelectedCar(e.target.value);
    };
    const choiceColor = e => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <div>
                Loại xe:
                <select onChange={e => {
                    choiceCar(e);
                }}
                >
                    <option value="Mec">Mercedes S600</option>
                    <option value="Kia">Morning</option>
                </select>
            </div>
            <div>
                Màu xe:
                <select onChange={e => {
                    choiceColor(e);
                }}
                >
                    <option value="Đỏ">Red</option>
                    <option value="Xanh">Blue</option>
                    <option value="Vàng">Yellow</option>
                    <option value="Đen">Black</option>
                    <option value="Trắng">White</option>
                </select>
            </div>
            <h1>Kết quả: {selectedCar} màu {selectedColor}</h1>
        </div>
    );
}

export default Car;