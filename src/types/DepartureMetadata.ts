export interface DepartureMetadata {
  destination: string;
  state: string;
  display: string;
  scheduled: string;
  expected: string;
  journey: {
    id: string;
  };
  line: {
    designation: string;
  }
}