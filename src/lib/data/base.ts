const firstName = 'Константин';
const lastName = 'Севастьянов';
const suffix = 'sevasek portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
