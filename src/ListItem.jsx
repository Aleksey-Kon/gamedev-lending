export default function ListItem({ title, description, icon }) {
    return (
        <>
        <li className="p-6 rounded-xl bg-white shadow dark:bg-gray-700">
            <div className="w-12 h-12 mx-auto bg-orange-200 flex items-center justify-center rounded-2xl" >
            <img src={icon} alt="icon" className="w-7 h-7" />
            </div>
            <h2 className="text-center text-2xl font-bold mt-2 dark:text-white">{title}</h2>
            <p className="text-center dark:text-white">{description}</p>
        </li>
        </>
    );
}