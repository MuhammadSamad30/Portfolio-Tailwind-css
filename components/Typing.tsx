import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Front-end Developer',
        1000,
        'Graphic Designer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color: '#ffb703' }}
      repeat={Infinity}
    />
  );
};
export default TypingEffect;