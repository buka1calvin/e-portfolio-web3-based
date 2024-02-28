import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'GetInstitution' : ActorMethod<
    [string],
    {
      'id' : string,
      'title' : string,
      'password' : string,
      'description' : string,
      'email' : string,
      'image' : Uint8Array | number[],
    }
  >,
  'RetrieveAllInstitutions' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'title' : string,
        'password' : string,
        'description' : string,
        'email' : string,
        'image' : Uint8Array | number[],
      }
    >
  >,
  'getCertificates' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'isued_at' : string,
        'description' : string,
        'end_date' : string,
        'created_by' : Principal,
        'start_date' : string,
        'profile_id' : string,
      }
    >
  >,
  'getCertificatesPerProfileId' : ActorMethod<
    [string],
    {
      'id' : string,
      'isued_at' : string,
      'description' : string,
      'end_date' : string,
      'created_by' : Principal,
      'start_date' : string,
      'profile_id' : string,
    }
  >,
  'getProfile' : ActorMethod<
    [string],
    {
      'id' : string,
      'firstname' : string,
      'country' : string,
      'created_at' : bigint,
      'created_by' : Principal,
      'email' : string,
      'middlename' : string,
      'address' : string,
      'gender' : string,
      'image' : Uint8Array | number[],
      'date_of_birth' : string,
      'phone_number' : string,
      'lastname' : string,
    }
  >,
  'getProfiles' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'firstname' : string,
        'country' : string,
        'created_at' : bigint,
        'created_by' : Principal,
        'email' : string,
        'middlename' : string,
        'address' : string,
        'gender' : string,
        'image' : Uint8Array | number[],
        'date_of_birth' : string,
        'phone_number' : string,
        'lastname' : string,
      }
    >
  >,
  'newCertificate' : ActorMethod<
    [
      {
        'isued_at' : string,
        'description' : string,
        'end_date' : string,
        'start_date' : string,
        'profile_id' : string,
      },
    ],
    {
      'id' : string,
      'isued_at' : string,
      'description' : string,
      'end_date' : string,
      'created_by' : Principal,
      'start_date' : string,
      'profile_id' : string,
    }
  >,
  'newExperience' : ActorMethod<
    [
      {
        'end_date' : string,
        'start_date' : string,
        'short_note' : string,
        'position' : string,
        'profile_id' : string,
      },
    ],
    {
      'end_date' : string,
      'created_by' : Principal,
      'start_date' : string,
      'short_note' : string,
      'position' : string,
      'profile_id' : string,
    }
  >,
  'newInstitution' : ActorMethod<
    [
      {
        'title' : string,
        'password' : string,
        'description' : string,
        'email' : string,
        'image' : Uint8Array | number[],
      },
    ],
    {
      'id' : string,
      'title' : string,
      'password' : string,
      'description' : string,
      'email' : string,
      'image' : Uint8Array | number[],
    }
  >,
  'newProfile' : ActorMethod<
    [
      {
        'firstname' : string,
        'country' : string,
        'email' : string,
        'middlename' : string,
        'address' : string,
        'gender' : string,
        'image' : Uint8Array | number[],
        'date_of_birth' : string,
        'phone_number' : string,
        'lastname' : string,
      },
    ],
    {
      'id' : string,
      'firstname' : string,
      'country' : string,
      'created_at' : bigint,
      'created_by' : Principal,
      'email' : string,
      'middlename' : string,
      'address' : string,
      'gender' : string,
      'image' : Uint8Array | number[],
      'date_of_birth' : string,
      'phone_number' : string,
      'lastname' : string,
    }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
