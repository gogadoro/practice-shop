import {
  Label_Form,
  Input_Form,
  Div_Group,
} from './input-form.styles.jsx';

const InputForm = ({ label, ...otherPorps }) => {
  return (
    <Div_Group>
      <Input_Form {...otherPorps} />
      {label && (
        <Label_Form shrink={otherPorps.value.length} >
          {label}
        </Label_Form>
      )}
    </Div_Group>
  )
}

export default InputForm;