import { FormInputWrapper, AuthInputLabel, Input } from './styles';

const FormInput = ({ auth, label, Icon, ...otherProps }) => {

  // You need to specify a dummy placeholder for auth input
  // for the label to float when you move focus away.
  // The placeholder does not show regardless on the auth input.

  if (auth)
    return (
      <FormInputWrapper>
        <Input auth {...otherProps} />
        <AuthInputLabel>
          <Icon className="auth-input_icon" />
          {label}
        </AuthInputLabel>
      </FormInputWrapper>
    )

  else return (
    <FormInputWrapper>
      <label className='input-label'>{label}</label>
      <Input {...otherProps} />
    </FormInputWrapper>
  )

};

export default FormInput;