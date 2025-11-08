import Button from "./Button";

const FeatureShowcase = ({ image, title, description, points, reverse }) => {
  return (
    <section
      className={`flex flex-col items-center gap-10 lg:gap-20 py-16 px-6 sm:px-10 lg:px-20 
      ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-[90%] max-w-md rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto font-semibold text-2xl">
          {description}
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
          {points.map((point, idx) => (
            <li
              className="text-gray-600 mt-4 max-w-3xl mx-auto font-semibold text-2xl"
              key={idx}
            >
              {point}
            </li>
          ))}
        </ul>
        <Button
          type="outline"
          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 w-fit"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="40"
              viewBox="0 0 180.596 180.381"
            >
              <defs>
                <clipPath id="clip-path">
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M.415,51.724a51.791,51.791,0,0,1,100-18.835l-8.041,3.142c-.008-.02-.149-.287-.163-.323A43.144,43.144,0,1,0,52.206,94.884,42.9,42.9,0,0,0,92.374,67.417l8.041,3.142a51.791,51.791,0,0,1-100-18.835Z"
                    fill="#504f4d"
                    stroke="#707070"
                    stroke-linejoin="round"
                    stroke-width="10"
                  ></path>
                </clipPath>
              </defs>
              <g id="wb" transform="translate(-824.602 -235.809)">
                <g id="WA" transform="translate(828.81 239.809)">
                  <g
                    id="Group_3"
                    data-name="Group 3"
                    transform="translate(0.996 1)"
                  >
                    <g id="Group_1" data-name="Group 1">
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M3.755,171.381a2.5,2.5,0,0,1-1.924-.824,2.188,2.188,0,0,1-.55-2.748l12.366-37.374A83.619,83.619,0,0,1,1.007,86.191a85.136,85.136,0,1,1,40.947,72.824L4.58,171.107a1.01,1.01,0,0,1-.824.275Zm38.473-18.137a2.1,2.1,0,0,1,1.374.55A79.735,79.735,0,0,0,139.576,27.167,79.571,79.571,0,0,0,6.5,86.191a80.164,80.164,0,0,0,12.366,42.6,2.205,2.205,0,0,1,.275,2.2c0,.275-.275.55-.55.824L8.152,164.236,41.4,153.244Z"
                        transform="translate(-0.996 -1)"
                        fill="#00bf1b"
                        stroke="#00bf1b"
                        stroke-width="10"
                      ></path>
                    </g>
                  </g>
                </g>
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="6"
                  cy="6"
                  r="6"
                  transform="translate(954 318)"
                  fill="#00bf1b"
                ></circle>
                <g id="Group_4" data-name="Group 4" transform="translate(-2)">
                  <g
                    id="Mask_Group_1"
                    data-name="Mask Group 1"
                    transform="translate(864.587 273.276)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="round"
                      d="M51.7,103.4A51.7,51.7,0,1,1,97.86,28.392a4.308,4.308,0,1,1-7.69,3.878,43.084,43.084,0,1,0-.047,38.939A4.308,4.308,0,0,1,97.8,75.121,51.507,51.507,0,0,1,51.7,103.4Z"
                      transform="translate(1.219 0.028)"
                      fill="#504f4d"
                    ></path>
                  </g>
                  <g
                    id="Layer_2_00000052077968596194672690000003389329715325743022_"
                    transform="translate(893.948 242.202)"
                  >
                    <g id="Layer_2_copy_13" transform="translate(0.087 62.45)">
                      <g id="_36" transform="translate(0 0)">
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M52.318,64.043a5.432,5.432,0,0,0-7.685,0L18.655,90.021,9.361,80.727a5.434,5.434,0,0,0-7.685,7.685l13.142,13.142a5.432,5.432,0,0,0,7.685,0L52.318,71.728a5.451,5.451,0,0,0,0-7.685Z"
                          transform="translate(-0.087 -62.45)"
                          fill="#504f4d"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          }
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default FeatureShowcase;
