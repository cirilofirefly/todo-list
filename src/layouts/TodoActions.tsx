import Button from "../components/Button";
import Input from "../components/Input";

export default function TodoActions() {
    return(
        <>
            <div className="flex justify-between space-x-2 w-full">
                <Input name={'todoInput'} />
                <Button text={'Add New'} />
            </div>
        </>
    )
}