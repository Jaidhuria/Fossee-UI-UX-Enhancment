export const formatDate = dateStr => {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const getStatusLabel = status => {
  switch (status) {
    case 0: return 'Pending';
    case 1: return 'Accepted';
    case 2: return 'Rejected';
    default: return 'Unknown';
  }
};
