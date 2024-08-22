import { useState } from "react";

let nextId = 0;

export default function Create() {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [, setCards] = useState([]);

    const handleClickAdd = (na, no) => {
        setCards([
            ...cards,
            {
                id: nextId++,
                name: na,
                note: no
            }
        ]);
    };

    const handleViewClick = (card) => {
        // Replace with your view logic
        alert(`Viewing card with ID: ${card.id}\nName: ${card.name}\nDescription: ${card.note}`);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">เพิ่มข้อมูลสมุนไพร</span></h1>
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <label className="block text-gray-700 font-medium mb-2">ชื่อสมุนไพร:</label>
                <input
                    name='cName'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    type="text"
                />
                <label className="block text-gray-700 font-medium mb-2">ภาพตัวอย่าง:</label>
                <textarea
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <label className="block text-gray-700 font-medium mb-2">รายละเอียด:</label>
                <textarea
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <label className="block text-gray-700 font-medium mb-2">สรรพคุณ*:</label>
                <textarea
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ยาใช้ภายใน</label>
                </div>
                <div className="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ยาใช้ภายนอก</label>
                </div>
                
                <label className="block text-gray-700 font-medium mb-2">ผู้ผลิต*:</label>
                <textarea
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <form className="max-w-sm mx-auto">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทสมุนไพร</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>ขิง</option>
                <option value="D">ตะใคร้</option>
                <option value="L">มะนาว</option>
                </select>
                </form>
                <label className="block text-gray-700 font-medium mb-2">ติดต่อผู้ผลิต*:</label>
                <textarea
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <></>
                <button
                    
                    onClick={() => handleClickAdd(name, note)}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
                >
                    บันทึกข้อมูล
                </button>
            </div>
            <div className="w-full max-w-md mt-6">
                <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200 text-left">
                        <tr>
                            <th className="p-3 border-b text-gray-700">ID</th>
                            <th className="p-3 border-b text-gray-700">Name</th>
                            <th className="p-3 border-b text-gray-700">Description</th>
                            <th className="p-3 border-b text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.length > 0 ? (
                            cards.map(card => (
                                <tr key={card.id} className="hover:bg-gray-50">
                                    <td className="p-3 border-b text-gray-600">{card.id}</td>
                                    <td className="p-3 border-b text-gray-600">Test</td>
                                    <td className="p-3 border-b text-gray-600">Test</td>
                                    <td className="p-3 border-b text-gray-600">
                                        <button
                                            onClick={() => handleViewClick(card)}
                                            className="bg-green-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-green-600"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                
                            </tr>
                        )}
                        {/* Example 4x4 table */}
                        {Array.from({ length: 4 }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className="p-3 border-b text-gray-600 text-center">{rowIndex + 1}</td>
                                <td className="p-3 border-b text-gray-600 text-center">Test</td>
                                <td className="p-3 border-b text-gray-600 text-center">Test</td>
                                <td className="p-3 border-b text-gray-600 text-center">
                                    <button
                                        onClick={() => handleViewClick({ id: rowIndex, name: 'Test', note: 'Test' })}
                                        className="bg-green-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}