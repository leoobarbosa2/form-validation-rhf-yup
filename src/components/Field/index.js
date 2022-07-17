import Label from './Label';
import Input from './Input';
import Content from './Content'

const Text = ({ label, type, name, register }) => (
    <Label>
        <Content>{label}</Content>
        <Input type={type} name={name} {...register(name)}/>
    </Label>
)

const Field = {
    Text
}

export default Field;