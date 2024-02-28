export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'GetInstitution' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Text,
            'title' : IDL.Text,
            'password' : IDL.Text,
            'description' : IDL.Text,
            'email' : IDL.Text,
            'image' : IDL.Vec(IDL.Nat8),
          }),
        ],
        ['query'],
      ),
    'RetrieveAllInstitutions' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Text,
              'title' : IDL.Text,
              'password' : IDL.Text,
              'description' : IDL.Text,
              'email' : IDL.Text,
              'image' : IDL.Vec(IDL.Nat8),
            })
          ),
        ],
        ['query'],
      ),
    'getCertificates' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Text,
              'isued_at' : IDL.Text,
              'description' : IDL.Text,
              'end_date' : IDL.Text,
              'created_by' : IDL.Principal,
              'start_date' : IDL.Text,
              'profile_id' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'getCertificatesPerProfileId' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Text,
            'isued_at' : IDL.Text,
            'description' : IDL.Text,
            'end_date' : IDL.Text,
            'created_by' : IDL.Principal,
            'start_date' : IDL.Text,
            'profile_id' : IDL.Text,
          }),
        ],
        ['query'],
      ),
    'getProfile' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Text,
            'firstname' : IDL.Text,
            'country' : IDL.Text,
            'created_at' : IDL.Nat64,
            'created_by' : IDL.Principal,
            'email' : IDL.Text,
            'middlename' : IDL.Text,
            'address' : IDL.Text,
            'gender' : IDL.Text,
            'image' : IDL.Vec(IDL.Nat8),
            'date_of_birth' : IDL.Text,
            'phone_number' : IDL.Text,
            'lastname' : IDL.Text,
          }),
        ],
        ['query'],
      ),
    'getProfiles' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Text,
              'firstname' : IDL.Text,
              'country' : IDL.Text,
              'created_at' : IDL.Nat64,
              'created_by' : IDL.Principal,
              'email' : IDL.Text,
              'middlename' : IDL.Text,
              'address' : IDL.Text,
              'gender' : IDL.Text,
              'image' : IDL.Vec(IDL.Nat8),
              'date_of_birth' : IDL.Text,
              'phone_number' : IDL.Text,
              'lastname' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'newCertificate' : IDL.Func(
        [
          IDL.Record({
            'isued_at' : IDL.Text,
            'description' : IDL.Text,
            'end_date' : IDL.Text,
            'start_date' : IDL.Text,
            'profile_id' : IDL.Text,
          }),
        ],
        [
          IDL.Record({
            'id' : IDL.Text,
            'isued_at' : IDL.Text,
            'description' : IDL.Text,
            'end_date' : IDL.Text,
            'created_by' : IDL.Principal,
            'start_date' : IDL.Text,
            'profile_id' : IDL.Text,
          }),
        ],
        [],
      ),
    'newExperience' : IDL.Func(
        [
          IDL.Record({
            'end_date' : IDL.Text,
            'start_date' : IDL.Text,
            'short_note' : IDL.Text,
            'position' : IDL.Text,
            'profile_id' : IDL.Text,
          }),
        ],
        [
          IDL.Record({
            'end_date' : IDL.Text,
            'created_by' : IDL.Principal,
            'start_date' : IDL.Text,
            'short_note' : IDL.Text,
            'position' : IDL.Text,
            'profile_id' : IDL.Text,
          }),
        ],
        [],
      ),
    'newInstitution' : IDL.Func(
        [
          IDL.Record({
            'title' : IDL.Text,
            'password' : IDL.Text,
            'description' : IDL.Text,
            'email' : IDL.Text,
            'image' : IDL.Vec(IDL.Nat8),
          }),
        ],
        [
          IDL.Record({
            'id' : IDL.Text,
            'title' : IDL.Text,
            'password' : IDL.Text,
            'description' : IDL.Text,
            'email' : IDL.Text,
            'image' : IDL.Vec(IDL.Nat8),
          }),
        ],
        [],
      ),
    'newProfile' : IDL.Func(
        [
          IDL.Record({
            'firstname' : IDL.Text,
            'country' : IDL.Text,
            'email' : IDL.Text,
            'middlename' : IDL.Text,
            'address' : IDL.Text,
            'gender' : IDL.Text,
            'image' : IDL.Vec(IDL.Nat8),
            'date_of_birth' : IDL.Text,
            'phone_number' : IDL.Text,
            'lastname' : IDL.Text,
          }),
        ],
        [
          IDL.Record({
            'id' : IDL.Text,
            'firstname' : IDL.Text,
            'country' : IDL.Text,
            'created_at' : IDL.Nat64,
            'created_by' : IDL.Principal,
            'email' : IDL.Text,
            'middlename' : IDL.Text,
            'address' : IDL.Text,
            'gender' : IDL.Text,
            'image' : IDL.Vec(IDL.Nat8),
            'date_of_birth' : IDL.Text,
            'phone_number' : IDL.Text,
            'lastname' : IDL.Text,
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
