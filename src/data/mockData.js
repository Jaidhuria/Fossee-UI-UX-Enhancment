/**
 * Mock Data Layer
 * Original Django models (Profile, Workshop, WorkshopType, Comment)
 * are represented here as plain JS objects to enable frontend development.
 */

export const TITLE_OPTIONS = [
  { value: 'Dr.', label: 'Dr.' },
  { value: 'Prof.', label: 'Prof.' },
  { value: 'Mr.', label: 'Mr.' },
  { value: 'Ms.', label: 'Ms.' },
];

export const DEPARTMENT_OPTIONS = [
  { value: 'CSE', label: 'Computer Science' },
  { value: 'ECE', label: 'Electronics & Communication' },
  { value: 'ME', label: 'Mechanical Engineering' },
  { value: 'EE', label: 'Electrical Engineering' },
  { value: 'CE', label: 'Civil Engineering' },
  { value: 'IT', label: 'Information Technology' },
  { value: 'OTH', label: 'Others' },
];

export const STATE_OPTIONS = [
  { value: 'IN-MH', label: 'Maharashtra' },
  { value: 'IN-DL', label: 'Delhi' },
  { value: 'IN-KA', label: 'Karnataka' },
  { value: 'IN-TN', label: 'Tamil Nadu' },
  { value: 'IN-GJ', label: 'Gujarat' },
  // ... more states can be added
];

export const SOURCE_OPTIONS = [
  { value: 'email', label: 'Email' },
  { value: 'social', label: 'Social Media' },
  { value: 'friend', label: 'Friend/Colleague' },
  { value: 'website', label: 'Website' },
];

export const workshopTypes = [
  {
    id: 1,
    name: 'Arduino Programming',
    description: 'Learn to program Arduino for various IoT applications.',
    duration: 2,
    termsAndConditions: '1. Participants must have basic C programming knowledge.\n2. Laptops are mandatory.',
  },
  {
    id: 2,
    name: 'Python for Data Science',
    description: 'Comprehensive introduction to Python, NumPy, and Pandas.',
    duration: 3,
    termsAndConditions: '1. Basic understanding of mathematics is required.\n2. Anaconda distribution should be installed.',
  },
  {
    id: 3,
    name: 'Scilab for Engineers',
    description: 'Numerical computing for engineers using Scilab open-source software.',
    duration: 1,
    termsAndConditions: '1. Open to all engineering disciplines.',
  },
];

export const users = [
  {
    id: 1,
    username: 'instructor1',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@iitb.ac.in',
    position: 'instructor',
    institute: 'IIT Bombay',
    title: 'Dr.',
    department: 'CSE',
  },
  {
    id: 2,
    username: 'coordinator1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@college.edu',
    position: 'coordinator',
    institute: 'Global Technical Institute',
    title: 'Mr.',
    department: 'ECE',
    location: 'Pune',
    state: 'IN-MH',
  },
];

export const workshops = [
  {
    id: 101,
    workshopTypeId: 1,
    coordinatorId: 2,
    instructorId: 1,
    date: '2025-05-15',
    status: 1, // Accepted
  },
  {
    id: 102,
    workshopTypeId: 2,
    coordinatorId: 2,
    instructorId: null,
    date: '2025-06-20',
    status: 0, // Pending
  },
];

export const comments = [
  {
    id: 1,
    workshopId: 101,
    authorId: 1,
    comment: 'Looking forward to conducting this session.',
    createdDate: '2025-04-10T10:00:00Z',
    public: true,
  },
];

// Helper functions
export const getWorkshopTypeById = id => workshopTypes.find(wt => wt.id === id);
export const getUserById = id => users.find(u => u.id === id);
export const getWorkshopsByCoordinator = id => workshops.filter(w => w.coordinatorId === id);
export const getCommentsByWorkshop = id => comments.filter(c => c.workshopId === id);

