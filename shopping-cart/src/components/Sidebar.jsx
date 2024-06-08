export default function Sidebar() {

    const filters = [];
    return (

        filters.map((filter) => 
        <Accordian key={filter.id}/>)
        //mapping filters to an accordian
    )

}