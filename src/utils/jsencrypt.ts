import { JSEncrypt } from 'jsencrypt'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/KDQL3zQKu5OfAZocNE9cvk6M\n' +
  'bjJtzlXHioRoeZZgZiIaAJE9avVEP/8E/h4kQyrRNCzHVNeo/40mYMkSVOyvy1LJ\n' +
  'tCKu2dxoY659GL/zzc4m5YJKfste/RYfflR5AZcJmntTGUkpSOVG94FONFA0DRpN\n' +
  'gws2rKfRY7yZgc02kQIDAQAB'

const privateKey =
  'MIICWwIBAAKBgQC/KDQL3zQKu5OfAZocNE9cvk6MbjJtzlXHioRoeZZgZiIaAJE9\n' +
  'avVEP/8E/h4kQyrRNCzHVNeo/40mYMkSVOyvy1LJtCKu2dxoY659GL/zzc4m5YJK\n' +
  'fste/RYfflR5AZcJmntTGUkpSOVG94FONFA0DRpNgws2rKfRY7yZgc02kQIDAQAB\n' +
  'AoGASOnm4FhlG2rtJguQYw247+FPSNWHusanhZNaahdmuqJ6g3yP6eNwZnYaqibc\n' +
  'DGzqWh4Srn24PSgtCOSGDc4C8WmBSoOdDminEHvHoNF93SgJUn1J3fChnH51xS9J\n' +
  'yzMYmNs/AmxWtw9LvezbdcG1EsupPo1v0CYb/pMHHEyE/qECQQD0LWaITuzdHf0R\n' +
  'gGIlB/lNzfzkloVodQsIVNBpfra6zGhGEkciyBnCFY8b2B9L9SWkIrya8a22ISEH\n' +
  '1wlDqNu9AkEAyGmcjS5JT/yRwaPZHNF988IJsqLx79tYPGrrxotNmp/855z91lYY\n' +
  'qUtVNlwgAWqtuqr7pmQSaoMeO4S7sCZpZQJAe/fk24V+mlCUYGNW8MgYmZjgMUn+\n' +
  'V2c8/7DX0wejTDllI1Y6SX1gHnqFmrRiR1UiFDASo3PaJuKw+2MAcBp13QJAbkiv\n' +
  'vYEbFskF7GkdsJ4XkWvVqlfAix1JEPZFiJxfuBcSNOJPTQNTztWFrsRDWIQ71d0B\n' +
  'Xi7zc2lz2YzRO73ngQJARPOOLD6meSHmO8QvAKqEqktIbKKOQ779JDIxFTB+nWQE\n' +
  'NmACF35mtIblccZchEz6TqrU+A3BeWegwfPCyX9dDg=='

// 加密
export const encrypt = (txt: string) => {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export const decrypt = (txt: string) => {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}
