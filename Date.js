
function getDate() 
{
    const today = new Date();

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    const day = today.toLocaleDateString("en-us", option);
    return day;
}

module.exports = getDate;