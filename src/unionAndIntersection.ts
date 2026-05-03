// Union means or in ts "|"

// Intersection means and "&"

type Student = {
  id: string;
  name: string;
  phoneNo: string;
};

type Cr = {
  designation: string;
  teamSize: number;
};

type StudentCr = Student & Cr;

const studentCr: StudentCr = {
  id: "24IR028",
  name: "Ibtisum",
  phoneNo: "014......",
  designation: "CR",
  teamSize: 65,
};
