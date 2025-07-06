const Frontend = ({ skills, title }) => {
  return (
    <div className="skills__content">
      {/* <h3 className="skills__title">Frontend Developer</h3> */}

      <div className="skills__box">
        <div className="skills__group">
          {skills?.slice(0, 4).map((skill, index) => (
            <div className="skills__data" key={index}>
              <span>{skill.icon}</span>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {skills?.slice(5, 9).map((skill, index) => (
            <div className="skills__data" key={index}>
              <span>{skill.icon}</span>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {skills?.slice(10, 14).map((skill, index) => (
            <div className="skills__data" key={index}>
              <span>{skill.icon}</span>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
