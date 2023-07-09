async function jobsData() {
    const res = await fetch("http://localhost:3022");
    return res.json();
}

export default jobsData;