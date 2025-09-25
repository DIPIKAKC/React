// useref (object)=>value change garcha tara re-render gardaina, directly targeting elment, rerender nagari backend ma data pathauna kaam lagcha
// eg: input ref={variable assigned to useref} => input value chai some le paucha i.e. useRef targeted input element
// document. garera garyo bhane chai feri dom bancha so react ma tyo use garidaina

import { Button, Input } from "@heroui/react";
import { useRef } from "react";

export default function UseRef() {
    const some = useRef();
    const handleRef = () => {
        some.current.focus();
    }
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (

        <div className="p-5 space-y-5">
            <div>
                <Input ref={some} label="Label" />
            </div>
            <Button onClick={handleRef}>Button</Button>
        </div>

        // <div>

        // <div className="p-5 max-w-[300px]">


        //   <form onSubmit={handleSubmit} className="space-y-4">

        //     <Input
        //       onChange={handleSubmit}
        //       label='email' name="email" />

        //     <Button type="submit">Submit</Button>
        //   </form>

        // </div>

    )
}




