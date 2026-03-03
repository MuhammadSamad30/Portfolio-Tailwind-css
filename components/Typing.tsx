import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Full-Stack Developer',
        1000,
        'Next.js Specialist',
        1000,
        'UI/UX Designer',
        1000,
        'Tech Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      className="text-emerald-400"
      repeat={Infinity}
    />
  );
};
export default TypingEffect;