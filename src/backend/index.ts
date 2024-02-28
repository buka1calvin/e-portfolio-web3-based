import {
  Duration,
  blob,
  Canister,
  ic,
  Err,
  nat64,
  Ok,
  Opt,
  Principal,
  query,
  Record,
  Result,
  StableBTreeMap,
  text,
  bool,
  update,
  Variant,
  Vec,
  nat,
  None,
  Void,
} from 'azle';
import { v4 as uuidv4 } from "uuid";

const Institution = Record({
  id:text,
  title : text,
  description : text,    
  email:text,
  password:text,
  image : blob
});

const InstitutionPayload = Record({
  title : text,
  description : text,    
  email:text,
  password:text,
  image : blob
});

const profileDetails=Record({
  id : text,
  firstname : text,
  middlename : text,
  lastname : text,
  email : text,
  phone_number : text,
  date_of_birth : text,
  gender : text,
  country : text,
  address : text,
  image : blob,
  created_by : Principal,
  created_at:nat64,
})

const profilePayload=Record({
      firstname : text,
      middlename : text,
      lastname : text,
      email : text,
      phone_number : text,
      date_of_birth : text,
      gender : text,
      country : text,
      address : text,
      image : blob,
})

const Certificate=Record({
    id:text,
    description: text,
    start_date: text,
    end_date: text,
    created_by:Principal,
    isued_at:text,
    profile_id: text
})
const CertificatePayload=Record({
  description: text,
  start_date: text,
  end_date: text,
  isued_at:text,
  profile_id: text
})

const Experience=Record( {
  position:text,
  start_date: text,
  end_date : text,
  created_by: Principal,
  profile_id: text,
  short_note: text,
});
const ExperienceInfo =Record ( {
  position:text,
  start_date: text,
  end_date : text,
  profile_id: text,
  short_note: text,
});

type ProfileType=typeof profileDetails.tsType;
type InstitutionType=typeof Institution.tsType;
type CertificateType=typeof Certificate.tsType;
type ExperienceType=typeof Experience.tsType;
const profiles=StableBTreeMap<text,ProfileType>(0);
const Institutions=StableBTreeMap<text,InstitutionType>(1);
const Certificates=StableBTreeMap<text,CertificateType>(2);
const Experiences=StableBTreeMap<text,ExperienceType>(3)



export default Canister({

                       /////////////profile part///////////

  //@ts-ignore
  newProfile:update([profilePayload],profileDetails,(data)=>{
      
      const profile={id:uuidv4(),created_at:ic.time(),created_by:ic.caller(),...data};
      profiles.insert(profile.id,profile);

      return profile;
  }),
  getProfiles:query([],Vec(profileDetails),()=>{
      return profiles.values();
  }),
  //@ts-ignore
  getProfile:query([text],profileDetails,(id)=>{
      const userOpt=profiles.get(id);
      if("None" in userOpt){
          return Err("user not found!!")
      }
      const profile=userOpt.Some;
      return profile;

  }),

                  ///////////// institution part /////////////////////

  newInstitution:update([InstitutionPayload],Institution,(data)=>{
      const newInstitution={id:uuidv4(),...data};
      Institutions.insert(newInstitution.id,newInstitution);
      return newInstitution;
  }),
  RetrieveAllInstitutions:query([],Vec(Institution),()=>{
      return Institutions.values()
  }),
  //@ts-ignore
  GetInstitution:query([text],Institution,(institutionId)=>{
  const institutionOpt=Institutions.get(institutionId);
  if("None" in institutionOpt){
    return Err("institution not found!!")
}
const institution=institutionOpt.Some;
return institution;
      
  }),

              ////////////////////// certificates part /////////////////////

  newCertificate:update([CertificatePayload],Certificate,(data)=>{
    const newCertificate={...data,id:uuidv4(),created_by:ic.caller()}
    Certificates.insert(newCertificate.id,newCertificate);
    return newCertificate;
  }),
  getCertificates:query([],Vec(Certificate),()=>{
    return Certificates.values();
  }),
  //@ts-ignore
  getCertificatesPerProfileId:query([text],Certificate,(profile_id)=>{
    const certificateOpt=Certificates.get(profile_id);

    const certificates=certificateOpt.Some
    return certificates;

  }),

              //////////////////////experience part//////////////////////////

  newExperience:update([ExperienceInfo],Experience,(data)=>{
    const experience={created_by:ic.caller(),...data}
    Experiences.insert(experience.profile_id,experience)
    return experience;
  })
})




/////////////////////////////////////// Helpers Functions //////////////////////////////////////