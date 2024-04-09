**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / "src/repositories/profile.repository"

# Module: "src/repositories/profile.repository"

## Index

### Classes

* [ProfileRepository](../classes/_src_repositories_profile_repository_.profilerepository.md)

### Functions

* [getProfilesFromResponse](_src_repositories_profile_repository_.md#getprofilesfromresponse)

## Functions

### getProfilesFromResponse

▸ `Const`**getProfilesFromResponse**<T\>(`response`: T): Record<[ProfileId](_src_entities_mini_profile_entity_.md#profileid), [MiniProfile](../interfaces/_src_entities_mini_profile_entity_.miniprofile.md)\>

*Defined in [src/repositories/profile.repository.ts:31](https://github.com/dmitriy-qua/linkedin-private-api/blob/0548fcd/src/repositories/profile.repository.ts#L31)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | { included: ([LinkedInMiniProfile](../interfaces/_src_entities_linkedin_mini_profile_entity_.linkedinminiprofile.md) \| { $type: string  })[]  } |

#### Parameters:

Name | Type |
------ | ------ |
`response` | T |

**Returns:** Record<[ProfileId](_src_entities_mini_profile_entity_.md#profileid), [MiniProfile](../interfaces/_src_entities_mini_profile_entity_.miniprofile.md)\>
