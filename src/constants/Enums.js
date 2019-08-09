const ShapeEnum = {
  SQUARE: 0,
  ROUND: 1,
  properties: {
    0: {
      name: "square"
    },
    1: {
      name: "round"
    }
  }
}; 

const DropboxLoadingStatusEnum = {
  LOADING: 0,
  COMPLETED: 1,
  properties: {
    0: {
      name: "loading"
    },
    1: {
      name: "completed"
    }
  }
};

const SizeEnum = {
  TINY: 0,
  SMALL: 1,
  MEDIUM: 2,
  LARGE1: 3,
  LARGE2: 4,
  HUGE: 5,
  GARGANTUAN: 6,
  properties: {
    0: {
      name: "tiny",
      value: 0,
      code: "T"
    },
    1: {
      name: "small",
      value: 1,
      code: "S"
    },
    2: {
      name: "medium",
      value: 2,
      code: "M"
    },
    3: {
      name: "large1",
      value: 3,
      code: "L2"
    },
    4: {
      name: "large2",
      value: 4,
      code: "L1"
    },
    5: {
      name: "huge",
      value: 5,
      code: "H"
    },
    6: {
      name: "gargantuan",
      value: 6,
      code: "G"
    }
  }
};

export {ShapeEnum, SizeEnum, DropboxLoadingStatusEnum};