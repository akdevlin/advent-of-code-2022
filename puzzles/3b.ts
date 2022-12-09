console.log('---Advent of Code 2022 #3b ---');

const input = '';



let sacksInput = 'fBDGBcBrGDvjPtPtPV\n' +
    'QhzJLlLJZgLZzNTgZClQHvRvHFvrjrvnNjHnFjPF\n' +
    'ChldsCZhsQzsCGrrSfMfGpfrdM\n' +
    'MJbgcgJlvMSbfjMSbllmCrntwmFrrFwgtCtFFG\n' +
    'vPhddVZZhmnmdnHmHn\n' +
    'vNBZppZQhjSzfScjDN\n' +
    'jwhqbZRvbzvbqqpqzqHHCCCzsLmmQVtmJVJtLWLPrVLLVrmp\n' +
    'dGMfMGMdBBMSTfdMGTNlcZGGPSmQJVVWsJQPLmPLVPtmWPLW\n' +
    'llMBBcfBnBcZMGgqvCDbjbwgCHjvzH\n' +
    'RSDprRrwgVVRwrGqrJsNFJslgglmmNszzN\n' +
    'LLnWjcHWnCTmpClhHp\n' +
    'MpfMZWjtLMjpjtBPnLPndMBGRqwbwBwvrGwGrGVbVvwD\n' +
    'PQNGshQWtwWNcjssJHHJdlBLBlLrRDFFCrdwSlLB\n' +
    'mbzqZqsgMzfnbmbfgpZvZBLrLlSCrprDlLCrdFBlDL\n' +
    'MfvZzqMmsVnVzzTTbMzfvnctjhcHPQJJjNTGWjQJJHWP\n' +
    'MdLWQdMZrPQWsPdMQPLSqGpHGbGqpqqqVzpm\n' +
    'BhgFhVgnlgBNFtNwzpbTGbTTHpwwbF\n' +
    'tCfvvCfgvBjnfflftCvjWZVddMQZsMMsRdMZMP\n' +
    'lTLdHVlqmqWdvjvJttvFlJtC\n' +
    'ngbMTgGhQpgrGtvCzcCJccCrcj\n' +
    'npgwnDpSDbgbbnGGDQnMDSMgZZWVqNTNPRRdwLLNLqmPZTLP\n' +
    'RRSFZvRdrdbSvSVLRZrSGZZrHcHPfPPwJJVJmPHmJfHVThPm\n' +
    'WnLjBQBCQWqCQwpPmHTcfQpm\n' +
    'gBDttlnqLqlvzzlGRRlr\n' +
    'wGpdGdddMPDWgFJGBzmMlntTbZMtZbnT\n' +
    'qNSqQrrqSjQVrsvTtzNnnZTnfNztZw\n' +
    'rcVrjjsswVvRRHsFJLCDCpCddGCCcG\n' +
    'jLMhCPWLCSWSrRLPWmPPLSCLtcTvHHDhZcfHHltlfZtlfgfH\n' +
    'rBBNrbVdtZlvVcZc\n' +
    'FppGdpFsnsqGJnsFzGdJszbdwSLRSRPrSRjqrMqCwQMWQqRS\n' +
    'jTjZwnpjMDfZnmZfsRhGGztqCzwsdGws\n' +
    'JHrWcNrNNrJHLHlzsCtzGRRRHv\n' +
    'rNLrVBJFLmfCnbTpVQ\n' +
    'LGWJvDFssFmMBhThMvnB\n' +
    'CprbCNZpwfpwfrbZJMQMTQcVVgBZcVQBZc\n' +
    'ptNwfwzHzqzlttbrlpCCqzwtFLGSWFsPDLWFHSDjJWSDLFDs\n' +
    'MZJjSsCsMsZSSdZJhdjZtCbPHljqlLPlPRRDLqHHqLbB\n' +
    'mmwmVpGrnngmggGwnccPbDBPLLLllLBcFRFb\n' +
    'GQzVTQTTVzVrQrmvpTnmrQmMvZRhZZCZSZfCsfttSJddNC\n' +
    'gHZZQRdVgRQWWRPHWPnttDTmqQqDQnStzNqD\n' +
    'bscfjslJJspBLsslNStSmTmLmmDTzNnS\n' +
    'JJCrbbhBsplrrChpBbfjlpbbFWWVggPPhZVRRFPdVMddPnMg\n' +
    'FtLfHNhFJCClJlst\n' +
    'jnDQqnDSDSRqwBwnjdFlZbsrTZdsJsGCbw\n' +
    'zDFSmjSDVqnRMHmphPhfWPgW\n' +
    'rSpRtSPWpStVqrwSSdrrhZvnBBnDBvsqjlBqvvnnzl\n' +
    'LFNLLFfFFhMFbcbmbHbHgTNcvZvBZMsvBnJBzsZvjJvZlvnZ\n' +
    'gmFLhTTbFmmQrrSWWpwWVtwQ\n' +
    'DzmDJGSccGJPcdcJPJqwplhjBHmHVwwtBthV\n' +
    'grMMvRsNRnWCFrgZRrZFhpVVlHVnhpVjVtljhhhf\n' +
    'FFZFZTsvCMSQTdGcTHzT\n' +
    'TLsGTnZncjVmVLgm\n' +
    'DvRwMcHMvMbwBVlCBlzlMjCC\n' +
    'FdRtRHDwQvPnTfPqcFPP\n' +
    'rZNdpBSldLLCJZbbCT\n' +
    'WQcQwqsmQmmqJgTRLRCqLq\n' +
    'znQcwsmPcmnCzQmfGGnzHSDFlNptNthPSdllhFPplS\n' +
    'vWCWvVhhjPNjNNvWVNbnbHnrbGrmlPqnqqbw\n' +
    'JdZSLMgsdgQMcQssQnnDqmDqlDqnDlwrHc\n' +
    'tdgQSSdpQtSMSNWpWRfRCwjpjV\n' +
    'qhdJFpChSJhDFDrqbpJbddSHPPRnGGBfBrHfZRnjRnlBZH\n' +
    'zsMVzmwmtLMtmQTzvwlRcZnZZljvvfGcBjcZ\n' +
    'ttQzMtVgMWVMQsmtJgqJgCJbqhgbBSBN\n' +
    'BWvdCmZBrNRrGSSfTzQJJRTz\n' +
    'gMblllMgLVswbgwMsLjgLLnlVtfHfttSQttTJTSQGfGPTPTB\n' +
    'LMgnMgscgqbFBqvBNFBmNm\n' +
    'VlcczDZjjVbznwLnwpTH\n' +
    'NfJPJNfJdJMSHSHnjBRSnbbL\n' +
    'NddqPttjsdZDqhcqlFcD\n' +
    'NVrNBBFFFrvJJrVTFTNvWBCbCCgWGqDqhqghCLqbqtCC\n' +
    'mfZVPZPcqtLbcqgc\n' +
    'fwZlwzfRfQQPMZBBwwBjFSjTVrBT\n' +
    'GWWNMfWWwGWMtjJnVnJzlzVsvLnsVn\n' +
    'ZpRqHTBddsvtPLqVPP\n' +
    'bpSDgStgTbdFTpDdRmfwfmfGFcMQGWMcjQ\n' +
    'gCgGBgfCbRLbBLGnGBBfRGwprctZFMvtFtvSNNTZZtMvLc\n' +
    'DhJhDzzQlDdshVJlDdhqzqzQZFpppFMNtMZMtFFVvtpSMpFV\n' +
    'qQdsDHWWslnNgHmBbHBf\n' +
    'MRvnJFZVnvzJrWWSqMSPTSNqNj\n' +
    'GlcbDpCHCCczdsDppcccBGccqjwTTwQPPSjNjWSWSwwsPsws\n' +
    'GbdlBbgdVtngtzVg\n' +
    'GqTSRpgJgDNSNJqJlSTJlJCBmmcnjCjLFcMFmnGsmBsM\n' +
    'HPhfPrWdfrQPPPhQWHbLFFWFCmFjMBFFsLBFwj\n' +
    'fdzVbvfshrbzvfbfdVPvQtqqJgqgDpNTgqZZtglZtZDD\n' +
    'wsPhrDMfrwdvHdTFrrtH\n' +
    'lnQbNBbqVBqHGJSddvTlJJJJ\n' +
    'cjnHznzbQmgzqQjBWwZwRjDRfWWhWsWD\n' +
    'SsScnttbbSzRRMMMLpsBLP\n' +
    'dDJGgjGJVMSBBBMj\n' +
    'JGDNCfgfSChDJrgqdgqJqGbNbbcbNtzWFctbzzlWtFFn\n' +
    'dtsBsCMtwSVBlLZZZnMgcMZZ\n' +
    'brppQHGznLZgJzJJ\n' +
    'fprvRpNHpNnvbGDBCBPwBWFWBFBvtB\n' +
    'qjgjSgHNlSGHnjfSVDvDPRDDtcdDcGtD\n' +
    'FMTnnLQZtRZDbcZv\n' +
    'zhBLzrCwnCsTCMCQTFLwwCzpHgNlNmHqhlqSpWllmlllhh\n' +
    'bJqqFdfbGdfPNsJsdSRCFLRHLDDBHDnShL\n' +
    'lQWlWQpwQjlpwrjrwTSCTLMCCNTHRDDDDRRB\n' +
    'wtWgQmQQWtwWwrljNPfGPzJmbbfzmzZf\n' +
    'MjppbDGmNNblCpzsNZzhNPgHtzzs\n' +
    'qvdrqrQVVWLfqWfRRPRwZPPwggpf\n' +
    'cqdcdpqSrrSvrvWvvvrSbcGTTTbGlFFCCcnnGbTb\n' +
    'HLNfNGttHVFBHWSr\n' +
    'RZCLsbCbLbLhwzDgbZCbRZhhnpSnnWpWplFFnDnqlBFVpSVB\n' +
    'MzbhhzwcLGGfGMvMTv\n' +
    'PdBlpdVJlmftGbTzwbtRTGGL\n' +
    'NQNMgWNNQNScDhsSHSWhsNgbRCLwGnnwqLwLHbbCGGTjTR\n' +
    'MvhRMMRvQshgSNDWFrfBfJFZrFPJJJPBBp\n' +
    'qdtnQqWtnjfGGzsnGQmWWfqQNbRTgggRFNbCFNSSFlSJsrTr\n' +
    'PZBBbPMvVcMpSRSlSCpCSgCT\n' +
    'MvHZhwMVLDHDcZMvLQfwGWqwWjqjGbmnQq\n' +
    'NFPmjNhGthGNpddddFpzBbqPczSqPDzzDgbgLZ\n' +
    'VJWvwQrlLHWrvlQZDgZSSDSDBqbb\n' +
    'WfHwMWfvRvMWrWJsrfMRWGFmGGLttMNpjCpTdmFFht\n' +
    'DppfNpLwhTBRDbblgWNgCdgCvs\n' +
    'nLcLqFJrHJmLcFmqMFCdzdHdsgvdzvbvWPWs\n' +
    'nVFqrrQcSVmFjrmJnrFrSjTtRGRLBwfRTfZwhBQhRGGw\n' +
    'sHrZdHGpHhsrLpsssGLzhrdtWdJTMWJvffVdmnbfJVnW\n' +
    'cggRDCCjlPQCgDRnfbTtfMJfWVTm\n' +
    'cCDwQNlwQPjgCFDljwpSLFzGFzZhzsstSpGz\n' +
    'dGTGpGdPZZCpnnLRpgzgzn\n' +
    'lflshFjFcrNdBjMjMnmL\n' +
    'hDfrldDfbVPbQCtHHZ\n' +
    'cSRZmtFZScfjZtLbmCNMqhMVQCjwqqCwVB\n' +
    'pddczHpHHzgWdGdsvPrPzcvrJMNwJCQwJhNwBhCJBVMpCVJB\n' +
    'cgrWcHdnPHHznlmftmtLnRDD\n' +
    'PZFMMVJVZmVJVHMNJNVfNdNNSnSWsSRhgRRQnWSsRnSWmszc\n' +
    'llljlTwlprClTbTpwLlgQqhcnwnczhcgSqsQRR\n' +
    'TpCtGtrTBDZVZHNQZQdB\n' +
    'SggjglBBlzbDgdpFJddZpF\n' +
    'CCNLsfNfrcMLsTLPfPmndmTwmZtZJZJdJplp\n' +
    'sfWCqcvMrlMfMLsLNfhVGvjjjSzSzVQhQvVH\n' +
    'NTBhNhfBvfflsbSmcl\n' +
    'nrMZRnHHwBMZRsSsgSsGrbmdms\n' +
    'nPPFVwVWJqJBVJLT\n' +
    'vvWqWJWJvzfFZZJvWQzqZvdPPHjSfHjssHsbsfbjSHRR\n' +
    'DCwtDVjMCrltCnCrDCDmbTssPHLTLldssdSldSRp\n' +
    'nMcGtDmBmMGrGvvvvFhjFZgWcN\n' +
    'tGWWWfWpMDjMZbTbnqTC\n' +
    'JFscJzFPDJDJZnrJ\n' +
    'sBFPcBsSPBvmSPwFzSSQfpwWfDpgNNfWtfgpftfg\n' +
    'BvTsJJzQJLMlbhmbFlNmTl\n' +
    'PjGnpdpGcgDmhvnvmvlbmq\n' +
    'dRtDGGgcDtjRcwdgQLVLRMJsszJVLRQv\n' +
    'FGbPPfFSchBGSvGGWsjSTLVQLLVTsQlj\n' +
    'dDzPnCrRCrrWHHTTHsdVjs\n' +
    'wrwCgzMrNprCwRJJwnnbFmmpGZtcvcbFfPFmFG\n' +
    'fbrJjmmmZgmZLJZsBBWlCBGnCWdnfF\n' +
    'RVMDDNDHPNvvRvDtHMcctMqFslqWPnClddlClFlnBqCG\n' +
    'MDDvHzHVQMMDtTHJLrnggSZLTJZgTL\n' +
    'dgBBCBBdvbmrRczFMHMSrqjjSPzn\n' +
    'tZTwQlLVwnQLQQFJVPzjDSSzJFPD\n' +
    'fhWhQpTTZQlWfQWpWQWQLhBgchhRCsdbvNnbgRsmRR\n' +
    'LttflLnGrnMsmmHgWTbdMW\n' +
    'vBSWzZRDccWBFBmJsmPJmgbsgB\n' +
    'FppcFWRNRZLLppGrGrqr\n' +
    'JJClRmLlFGvMTlFLLfPFQQcDpQcjFcjqBc\n' +
    'zgHSZhggggtwSZhrDgsZgbjVQcVcjPNqcpQQqBjNQzNp\n' +
    'hZnsShSWGDMMMRnv\n' +
    'RbDbslClhsfNCbsMjbNrjNMfpTTTTJSzHTpLVzLLVWVzJz\n' +
    'ggFGgmqFZBnnSzTWPpHBLzdT\n' +
    'vmWZWGwcZZqthjDrbclNCjlD\n' +
    'dCHwnVBBCBnVHddqnQRdbbbrgTsfWwjcWlsfwDDg\n' +
    'hhlFpMtGJlZmDjfWfscjWDGD\n' +
    'hFNFvZmppmSlNJMmNFztmzFhdVPPHQQqqHPvLBQnBQQPQPnC\n' +
    'WfzsplQpvQgfwzlbllPGtPJTTwtGGZBTTGJB\n' +
    'VrmMjmFDjNjjDFBhHTcZtBRRGcGV\n' +
    'mqrFmmLrjmjZnmqLrmQsfvbsfsSSlpWqgglp\n' +
    'lsQVfDpfflpGGmQRRgdQbdfbWdqnjnHnqZHJTqqrWjqqcWnZ\n' +
    'PPFhFFtwzqjHgjWTWF\n' +
    'SwMwMhNMlMsgfQfl\n' +
    'cSttSDQQCgVvQQSvsstthQcslLLgLgLnpglffjfFlLFblnlH\n' +
    'rTTwTbdBpTHJfZZJ\n' +
    'BddPBzwMBzqRqddRGbVShvVhVQvQscvGtV\n' +
    'sSpsHqHMspqMqWsspwsSWsbBPvjrFbddrGTvZLFjdZTZGLLG\n' +
    'NccDncRVNDVJLvLPPJTJGvJL\n' +
    'mRCDNNhgDnghNRQNggNRcNlMtpMPMMtHtShlSSMtlhHW\n' +
    'QrjSFQWzDdCHtpFlbBbVns\n' +
    'PhJwNLfNqgfdLlZHpZJJpptBBb\n' +
    'qmwhfhhfMNWSmSdQCddv\n' +
    'VfRMdbshRmJBqbmDBH\n' +
    'CWwWCWTCrzFpzWwCWFzgppqHDtZBfqDmQtBftBDFqBtq\n' +
    'WlzrWWGWPrpGCGdfSsRGVnGVdNnR\n' +
    'lhLTfppGRhhbZntsbTqMbq\n' +
    'jrHWBHrMgjHPWMgWBJWBWjstPvwFFbbbvtvFqbPtvqws\n' +
    'rBJJJVWjBjLphcMhSVRV\n' +
    'fjrBPBjWVPWPrwtjPpRQZZVdZQddFdHFTZdT\n' +
    'GqlllsGLgMCqGqgTFbmHdTmRzgTm\n' +
    'qHchGscqGClHGhNwhjJJNWpwPB\n' +
    'JzrrJZqLFrnMzVjNNnNnNDwdGHGlHlHbpTZDlmpTHb\n' +
    'gQfQcRWPWgQSStCtfcsPsPmhsGdDhdGDHTwHpDlHwhTG\n' +
    'fvWQgCtfWgtttcPQcPBtjVdBMJMLJBFJMJVzNrJr\n' +
    'cMzNjGGNQFVzNNQVjNdqRLbFDqRpgLRDpDHD\n' +
    'TwtwWJJBJSvmJCWSvTTmTbBpfpRZSfDqqSqDgHLgqdDDqD\n' +
    'vtvmPrtWQMrbhMrG\n' +
    'NqCPqJNJQQQQGCtGPmMTrTpHlNdmpTrwdN\n' +
    'bzhZRDbnZHrmmcwRfM\n' +
    'vWhsnVWWswhSFvDSDsnhbDsLPqqPFjQjgFgtjqqCLJPgQQ\n' +
    'nqpfqfcnclcNcjjQ\n' +
    'BLQJQmLPPvdtTFNjlFNwPs\n' +
    'DgDgLLCQBBmpVSMrgfqnpp\n' +
    'njCnCwwcVCBWjrrhWrHdzJqmhl\n' +
    'QNGptTTQGLTdhqmdJBHT\n' +
    'GtLvDDvLMvppGGVZMssfCBMfcfMf\n' +
    'npPQGpDnsbJhvldphHFfpl\n' +
    'mgqZcqzczzzcqmRzrbrzBvfBLvlhhftFWlhlFtLBvv\n' +
    'cgjmTgbbMgmzqRRwGDDVQVGVSPwTJV\n' +
    'VhPNvgVhbjPsNvsChTZlHtlwZccZMhwlcm\n' +
    'fpznDWDzDfRqffpnrmcRmwlTMZrHTBHB\n' +
    'fWdQLFSnDzpndqzzqgsVvPsJLMsPCgvjPP\n' +
    'RFRDQVvqVMZGBVzqgqPNJNmNhqqPjnPS\n' +
    'rcLLCWrtwlWrWlTbTtlLWrWtjPPgdwgjmNmShpJnjSpSjgSg\n' +
    'LbLTnbbTHsWlfbtZRZGQHHZZDQMVFz\n' +
    'dwcLLSLVdwLdvdfZNJgQZWfffVJQ\n' +
    'CTMlCRCCCTCtBmCFMQJNNNbNfWvQjvZggT\n' +
    'mRnnnpFlvhnlMmBmFMCMCcdHrwzqszprdcwzLDwrSz\n' +
    'JSHLHRMlzJHcGMpwCffZctZmgfqqZm\n' +
    'vnTWvQrnrQjNnBWvnvDnVgqtVWwVgfFmqWfqZFWZ\n' +
    'rdQDBdBrQQhmBNjDTmrTnzPzPPLHSSHzHHRHRLdGLl\n' +
    'GvMRRwGwRFmZRnmbMhZMGcpgZBpdgBJcTsjsBstdds\n' +
    'SNlPzzlPDDQSDDDqfllqDLBpTgWBgWdTpcWjJQsWjjTp\n' +
    'rScrCqPCSLDNrqlFmRVRRrbhmRmFRw\n' +
    'dbtgMNlNSMQPSLNdvVQgSfcHHfJfHJtfmmHTqZffJH\n' +
    'wssswnzwChsrGCCwGCjzCsHFHbzZffbFBcffbHHTBJTZ\n' +
    'rsDRGDwjhWbrbRhGCGLdLNlNQVVDPSlMVMvv\n' +
    'BgPccPPRlZZmTMTZzZTC\n' +
    'jjNjntVtQnWHrJjFPnnqDqJTJTzqJmDDCqChzS\n' +
    'FnQHQjHVNnWVvQpgLPGRdcLpbfLLBl\n' +
    'JLMhFJfHHLJChRvfjLJJnFRpPrpPSrNnrTrTTPntTptrpw\n' +
    'QgcBCqcGBBGzGrNQNSwSrPPTsr\n' +
    'zzWdmzcWcdHCJCRRCF\n' +
    'GSRcjdjGcBnFWbnVLFQR\n' +
    'pCNqTqhDsMsMmNtNCZmMMtdCbVFzbFwnFFnWWFnzVLTQWQLF\n' +
    'qNJpMdCsDNsNNvGPlSPPJjfBBB\n' +
    'lsHjgmFsnFTwHgSPDRSrDqnqrrnr\n' +
    'NmZWcZmzNMZWJbbWvJMJJMzBBBrRrdRfDfppBNqSrrrPBP\n' +
    'JZQZzQtWJhmltVwVCjwGjs\n' +
    'DslBHDpdDlslgffFWnGqHfzH\n' +
    'JNMMCCCCSMvzzGfMzP\n' +
    'hNtCJTwRwZQbwrplpDjlpz\n' +
    'vwvJwLBzwhhwvzwrgwshLwVWWgFfmlSFVRDfWFSVFVfF\n' +
    'mNqbdPnNdpdjnMqSFFMDfSFVMDFRSV\n' +
    'ddpTPTqmbNjjNqndZzvLzJZzHCrrCCzsJH\n' +
    'SLjjlGMVpLpNSTDspsrHpFFwRrZgRfwpfgFZ\n' +
    'nQtWPzbPNQtbdzPtbBCQJNPcwFvZJZFFJrwRwrHcfcfrgF\n' +
    'NQCnqPBWddbPnbCdWdWQnmdVhsMMDsslmSSmMLlVTTDVMm\n' +
    'FZmcqBChfFmfsDjjnNMNjSDgNs\n' +
    'RZwzdvdZRvTRRlvWSgDjStnpntDwNMtD\n' +
    'vHTGRvvvZHlQPRQTbPTVfLJPqcLJBhfmFVJPCF\n' +
    'dStFcccjFjqGFrFHmSHFBjBvzhpprWZpppbppDvzhsvDhT\n' +
    'VMVLNfCCCRTTDtDDDTRz\n' +
    'QLJwMMLnLNVLdtGGgmdScBnB\n' +
    'nTCWnTnrllglrNgNTZFgSZbddHtdHLLwtMLQtfbM\n' +
    'BJGqppPCJVmqqhBJCdwwpLSLHddfHSLHtw\n' +
    'qmzBhczVGsqVBqnFcCjRWNrNlrgD\n' +
    'phrHLNtnMpslNFfwVGwFZSBfFTTz\n' +
    'cmJJDmmbCnCCfBSJGVBwfBfz\n' +
    'DdqdDbcqCPcCQRWmQPqNHhnRMntNNMNhlsLsML\n' +
    'gHHWJWMWsHWgWSnPwVnVNGGDbnwwTl\n' +
    'QjThjhFqqhmQTCVPfDVqPbDVVl\n' +
    'mpFLLrZjjBcmLFmmFtLBJMddMgSdHTscvcJzRHRs\n' +
    'gRdwcCddwghzddzzzsGfZsGnqlqVVhjGDj\n' +
    'DMBNpMDHrNrNLFMmpQJHZGnPjFPFlZjlfGVljGVf\n' +
    'SpbQNmHMzgcRwSSD\n' +
    'drqcMpNbpFpmjzfz\n' +
    'HLGZGsnGLwllzHGGgGnGsBFfmJtmtjfJDSBSJJJB\n' +
    'ZZwQwHTgZnwLGTTnQTHVlgbWCQNhzNcMqbrzcNNQdNcr\n' +
    'TDScznfzNlpbbrtsvjdcbh\n' +
    'BBHqFGWGFmVWqVBBWMtvCLvsLdvrvjLjdLbsvm\n' +
    'tPZHGFJPJqVwMWHJVRRSZNfQnzfpnTpNfl\n' +
    'FWNZgWCngsNwJwlQlrRTRhSjSS\n' +
    'GGLcVVcVmppMmpTjTRHlbRbSrVBh\n' +
    'rvmdzPcdzmzMrCNNPJFntFsCtD\n' +
    'MtfLBzSLmMtfBMQzMmzmSlfdTDvGCZGCndZnZgWDwGCZ\n' +
    'HhqrrpppcqhdbjPvbgGvTCnWDbTWZT\n' +
    'cNjsdqPqchJBlmzlVQLtBJ\n' +
    'DwwVFZlDBsZFDvLPdpjLjSVHjpLc\n' +
    'nMnztWhhfPSffcddGpgp\n' +
    'tQnrQzhzNtzbNrBwPJwTslTvNFFP\n' +
    'LWMvHJJrJwtzvgwMwVdGfcpNfdDVDWfdBB\n' +
    'jZPFmjnbmhPfTVfVHdhTTV\n' +
    'qqQCmCmbqCQqjQsQvrQSHSJrzz\n' +
    'wNzmDRwmgcGphZcPvLLZHjjFLF\n' +
    'JlbsClVVqDqFZjJD\n' +
    'WSlnCbttftsCsWftbCCrTffbpdzMwgMgSpRmdwdRzggmDGGg\n' +
    'gCCRBClgfCgFFTltTGgBqTsQhzLzQQNPnvrNzHrrfPzHLr\n' +
    'DMjqWSVwDwDwZDHZNvLQnrnrPrNv\n' +
    'bcmWJqdVcbtgBglbGTCl\n' +
    'SFDcrFHtlqhqqLdzTTwdJLPNDL\n' +
    'vBWsWvsmgvvvdPwNnn\n' +
    'smfRbpsWMBmsmMsBBBNbtSFttjCHSScbhHtHhHjb\n' +
    'SQpgGgMNvggQGMvQcgnHWmldnHWTWndnSHHF\n' +
    'DwbDPzthtttljTzTFBlmzl\n' +
    'DstCswftDbZbCChPPRrfwsfPQlLccJQLvVGNGNVpMNvZcvgG\n' +
    'HdqfjjLfHqFSHddVWNBjsWhWRRJtBNBs\n' +
    'gPMQHpmrcmnbRQNRRJsWttWW\n' +
    'pmbcZwbrPPrnTPMFFdDwqHwvHDvzDq\n' +
    'FFsVtFGVGvWVhlfVhzlsFvHbPwPmwHLTSbLjcLtbSbLm\n' +
    'rZrpJwCqnnJHmqcbcTLTbS\n' +
    'RCZZQMQpzvRhswVg';

const mockSackInput =     'HdqfjjLfHqFSHddVWNBjsWhWRRJtBNBs\n' +
    'gPMQHpmrcmnbRQNRRJsWttWW\n' +
    'pmbcZwbrPPrnTPMFFdDwqHwvHDvzDq\n' +
    'FFsVtFGVGvWVhlfVhzlsFvHbPwPmwHLTSbLjcLtbSbLm\n' +
    'rZrpJwCqnnJHmqcbcTLTbS\n' +
    'RCZZQMQpzvRhswVg';
const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
const upperALpha = lowerAlpha.toUpperCase();
export interface elfGroup {

}
function formatSacksWIthGroups(inputString: string): string[][][]{
    let sacks = inputString.split('\n');
    const elfGroups: string[][][] = [];
    for(let i = 0; i < sacks.length; i += 3) {

        const group: string[][] = [
            sacks[i].split(''),
            sacks[i + 1].split(''),
            sacks[i + 2].split('')
        ];
        elfGroups.push(group);
    }
    return elfGroups;
}
const groupsOfElves = formatSacksWIthGroups(sacksInput);
console.log('groupsOfElves[0]', groupsOfElves[0]);

// let sacksWithCompartments: sackCompartment[] = formatSacks(sacksInput);
// export interface sackCompartment  {
//     firstHalf: string[],
//     secondHalf: string[],
// }
function findSharedItems(elfGroup: string[][]): string | undefined{
        let sharedItem;
        let sharedItemArray = [];
        for(let i = 0; i < elfGroup[0].length; i++) {
            if(sharedItem) {
                break;
            }
            let potentialSharedItem = elfGroup[1].find((letter) => letter === elfGroup[0][i]);
            if(potentialSharedItem) {
                let jackpot = elfGroup[2].find((letter) => letter === elfGroup[0][i]);
                if(jackpot) {
                    sharedItem = jackpot;
                }
            }
        }
        return sharedItem;
}
let sharedItemList: string[] = groupsOfElves.map(group => findSharedItems(group)) as string[];
console.log(sharedItemList);

function getSharedItemsValue(sharedItemArray: (string)[]): number[] {
    return sharedItemArray.map((value) => {
        const alphaValueArray = [...lowerAlpha.split(''), ...upperALpha.split('')];
        console.log('both alpha length should be 52', alphaValueArray.length)
        const theValue = alphaValueArray.findIndex((letter) => letter === value);
        return theValue + 1;

    });
};
const listOfSharedItemValues = getSharedItemsValue(sharedItemList as string[]);
console.log('listOfSharedItemValues', listOfSharedItemValues)
const totalValue: number = listOfSharedItemValues.reduce((a, b) => a + b, 0);
console.log('totalValue', totalValue);